import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export const withAdminApiAuth = (handler) => {
  return withApiAuthRequired(async (req, res) => {
    const session = getSession(req, res);
    const user = session?.user;

    if (!user || user.role !== 'admin') {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    return handler(req, res);
  });
};
