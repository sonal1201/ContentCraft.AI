import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {
    const { user_id, has } = await req.auth();
    const hasPremiumPlan = await has({ plan: "premium" });
    const user = await clerkClient.users.getUser(user_id);

    if (!hasPremiumPlan && user.privateMetadata.free_usage) {
      req.free_usage = user.privateMetadata.free_usage;
    } else {
      await clerkClient.users.updateUserMetadata(user_id, {
        privateMetadata: {
          free_usage: 0,
        },
      });
      req.free_usage = 0;
    }
    req.plan = hasPremiumPlan ? "premium" : "free";
  } catch (error) {
    res.json({
        success: false,
        message: error.message
    })
  }
};
