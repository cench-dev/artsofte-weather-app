window.API_CONFIG = {
  OPENWEATHER_API_KEY: "your_test_openweather_api_key_here",
  YOUTUBE_API_KEY: "your_test_google_maps_api_key_here",
  
  IS_PRODUCTION: false,
  DEBUG_MODE: true,             
  USE_MOCK_DATA: false,
};

// Автоматически логгируем конфиг при загрузке
if (window.API_CONFIG.DEBUG_MODE) {
  window.addEventListener('load', function() {
    window.API_CONFIG.logConfig();
  });
}