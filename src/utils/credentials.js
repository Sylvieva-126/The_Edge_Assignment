export const credentialsStorageKey = "signupCredentials";

export const normalizeEmail = (email) => email.trim().toLowerCase();

export const hashValue = async (value) => {
  const data = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};