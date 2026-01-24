#!/bin/bash

# Social Media Links Update Script
# This script helps update the social media links in both index.html and programs.html

echo "Capital Finance Club - Social Media Links Updater"
echo "=================================================="
echo ""
echo "Please provide your social media links:"
echo ""

read -p "LinkedIn URL: " LINKEDIN_URL
read -p "Facebook URL: " FACEBOOK_URL
read -p "TikTok URL: " TIKTOK_URL

echo ""
echo "Updating links in index.html and programs.html..."

# Update index.html
sed -i '' "s|id=\"linkedin-link\" href=\"#\"|id=\"linkedin-link\" href=\"$LINKEDIN_URL\"|g" index.html
sed -i '' "s|id=\"facebook-link\" href=\"#\"|id=\"facebook-link\" href=\"$FACEBOOK_URL\"|g" index.html
sed -i '' "s|id=\"tiktok-link\" href=\"#\"|id=\"tiktok-link\" href=\"$TIKTOK_URL\"|g" index.html

# Update programs.html
sed -i '' "s|id=\"linkedin-link\" href=\"#\"|id=\"linkedin-link\" href=\"$LINKEDIN_URL\"|g" programs.html
sed -i '' "s|id=\"facebook-link\" href=\"#\"|id=\"facebook-link\" href=\"$FACEBOOK_URL\"|g" programs.html
sed -i '' "s|id=\"tiktok-link\" href=\"#\"|id=\"tiktok-link\" href=\"$TIKTOK_URL\"|g" programs.html

echo ""
echo "✅ Social media links updated successfully!"
echo ""
echo "Updated links:"
echo "- LinkedIn: $LINKEDIN_URL"
echo "- Facebook: $FACEBOOK_URL"
echo "- TikTok: $TIKTOK_URL"
echo ""
echo "Note: If you need to update the links again later, just run this script again."
