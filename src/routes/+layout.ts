import { checkInstall } from '$lib/gaurds/check-install';

export const prerender = true;
export const ssr = false;

export const load = ({ url }) => {
	checkInstall(url.pathname);
};
