import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const withAdminAuth = (Page) => withPageAuthRequired(Page);

export default withAdminAuth;
