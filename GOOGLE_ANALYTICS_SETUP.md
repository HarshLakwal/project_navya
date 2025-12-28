# Google Analytics Setup Guide

This guide will help you set up Google Analytics for your Navya Events & Advertising website to track users, traffic sources, and user behavior.

## Step 1: Get Your Google Analytics Measurement ID

1. **Go to Google Analytics**: Visit [https://analytics.google.com/](https://analytics.google.com/)
2. **Sign in** with your Google account
3. **Create an Account** (if you don't have one):
   - Click "Admin" (gear icon) in the bottom left
   - Click "Create Account"
   - Enter your account name (e.g., "Navya Advertising")
   - Configure account settings

4. **Create a Property**:
   - Click "Create Property"
   - Enter property name: "Navya Advertising Website"
   - Select time zone and currency
   - Click "Next"

5. **Get Your Measurement ID**:
   - Select "Web" as your platform
   - Enter your website URL (e.g., `https://navyaadvertising.com`)
   - Enter a stream name
   - You'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)

## Step 2: Add Measurement ID to Your Project

1. **Create a `.env.local` file** in the root of your project (if it doesn't exist)

2. **Add your Google Analytics ID**:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID from Step 1.

3. **Restart your development server**:
   ```bash
   npm run dev
   ```

## Step 3: Verify Google Analytics is Working

1. **Visit your website** in the browser
2. **Check Google Analytics Real-Time Reports**:
   - Go to Google Analytics dashboard
   - Navigate to "Reports" → "Realtime"
   - You should see yourself as an active user

3. **Use browser developer tools**:
   - Open browser DevTools (F12)
   - Go to Network tab
   - Filter by "collect" or "google-analytics"
   - You should see requests to Google Analytics

## What's Being Tracked

The Google Analytics integration tracks:

- ✅ **Page Views**: Every page visit is automatically tracked
- ✅ **User Sessions**: Tracks user sessions and visits
- ✅ **Traffic Sources**: Where users are coming from (search engines, social media, direct, etc.)
- ✅ **User Locations**: Geographic location of visitors
- ✅ **Device Information**: Desktop, mobile, tablet usage
- ✅ **Browser Information**: Which browsers visitors use
- ✅ **Page Navigation**: Tracks user journey through your site
- ✅ **Real-time Data**: See active users in real-time

## Viewing Your Analytics Data

### Real-Time Reports
- Navigate to: **Reports** → **Realtime**
- See active users right now

### Traffic Sources
- Navigate to: **Reports** → **Acquisition** → **Traffic acquisition**
- See where your traffic is coming from:
  - Organic Search
  - Direct
  - Social Media
  - Referrals
  - Paid Search

### User Demographics
- Navigate to: **Reports** → **User** → **Demographics**
- See user location, age, gender (if available)

### Pages Performance
- Navigate to: **Reports** → **Engagement** → **Pages and screens**
- See which pages are most popular

## For Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. **Add the environment variable in your hosting platform**:
   - Vercel: Go to Project Settings → Environment Variables
   - Add `NEXT_PUBLIC_GA_ID` with your Measurement ID
   - Redeploy your application

2. **Verify it's working**:
   - Visit your live website
   - Check Google Analytics Real-Time reports

## Additional Configuration (Optional)

### Custom Events Tracking

If you want to track custom events (button clicks, form submissions, etc.), you can use:

```javascript
// Track a custom event
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'button_click', {
    event_category: 'engagement',
    event_label: 'contact_form',
    value: 1
  })
}
```

### Enhanced E-commerce Tracking

For tracking conversions or specific business goals, you can set up enhanced tracking in the Google Analytics component.

## Troubleshooting

**Not seeing data in Google Analytics?**
- ✅ Check that `.env.local` file exists and has correct ID
- ✅ Restart your development server after adding the ID
- ✅ Clear browser cache
- ✅ Check browser console for errors
- ✅ Verify the Measurement ID format is correct (G-XXXXXXXXXX)

**Data delayed?**
- Real-time reports update immediately
- Standard reports may take 24-48 hours to fully populate

## Need Help?

- [Google Analytics Help Center](https://support.google.com/analytics)
- [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Next.js Analytics Guide](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)

