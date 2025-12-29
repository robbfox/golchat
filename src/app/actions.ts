'use server'

export async function verifyPassword(username: string, password: string): Promise<boolean> {
  let correctPassword;

  if (username === 'Robert Fox') {
    correctPassword = process.env.ROBERT_PASSWORD;
  } else if (username === 'Sahida Parvin') {
    correctPassword = process.env.SAHIDA_PASSWORD;
  } else {
    return false;
  }

  if (!correctPassword) {
    console.error(`Password for ${username} is not set in environment variables.`);
    return false;
  }

  return password === correctPassword;
}
