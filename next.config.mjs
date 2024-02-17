import createNextIntlPlugin from "next-intl/plugin";

// set up the plugin which creates an alias to provide your i18n configuration
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
