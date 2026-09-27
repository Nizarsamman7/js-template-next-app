# Next.js app-root starter

Business-site template with routes next to `app/layout.tsx`, the same layout used by garage and service sites:

- `app/page.tsx`, `app/diensten`, `app/over-ons`, `app/contact`
- `components/layout` for header and footer
- `lib/site.ts` for copy
- `@/*` points at the project root

## Run

```bash
npm install
npm run dev
```

Dutch route names are intentional so a local service business can start from familiar URLs. Rename them if the client works in another language. No payments, admin, or database are included.
