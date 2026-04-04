export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/',
        },
        sitemap: 'https://navjco.com/sitemap.xml',
    };
}
