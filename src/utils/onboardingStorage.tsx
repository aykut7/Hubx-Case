import * as SecureStore from "expo-secure-store";

const ONBOARDING_KEY = "onboarding_completed";

export async function markOnboardingAsDone() {
  await SecureStore.setItemAsync(ONBOARDING_KEY, "done");
}

export async function markOnboardingAsNotDone() {
  await SecureStore.deleteItemAsync(ONBOARDING_KEY);
}

export async function isOnboardingDone(): Promise<boolean> {
  const value = await SecureStore.getItemAsync(ONBOARDING_KEY);
  return value === "done";
}
