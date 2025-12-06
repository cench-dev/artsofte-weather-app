

echo "Creating config.js with environment variables..."

cat > config.js << EOF
window.API_CONFIG = {
  WEATHER_API_KEY: "${WEATHER_API_KEY}",
  YOUTUBE_API_KEY: "${YOUTUBE_API_KEY}",
  IS_PRODUCTION: true,
  DEBUG_MODE: false
};

console.log('✅ Config loaded from Vercel environment');
EOF

echo "config.js created successfully!"