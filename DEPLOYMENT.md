# Deployment Notes

## Required changes already wired into the code

- Frontend API calls now support `VITE_API_BASE_URL` or `VITE_API_BASE`.
- Backend CORS now accepts `FRONTEND_URL` and optional comma-separated `CORS_ORIGINS`.

## Frontend env vars

- `VITE_API_BASE_URL=https://your-api.onrender.com`
- `VITE_GOOGLE_CLIENT_ID=...`
- `VITE_GOOGLE_DRIVE_CLIENT_ID=...`
- `VITE_GOOGLE_PICKER_API_KEY=...`
- `VITE_RECAPTCHA_SITE_KEY=...`

## Backend env vars

- `NODE_ENV=production`
- `MONGO_URI=...`
- `JWT_SECRET=...`
- `FRONTEND_URL=https://your-frontend.vercel.app`
- `CORS_ORIGINS=https://your-frontend.vercel.app,https://your-custom-domain.com`
- `ENABLE_AUTO_BACKUP=false`

## Notes

- Render free services use ephemeral disk storage, so local `uploads/` and `backups/` are not durable.
- Render free services block standard SMTP ports, so email features need a mail API or a different host if you want them working in production.
