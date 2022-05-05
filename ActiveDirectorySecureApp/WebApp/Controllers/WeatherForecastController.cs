using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly IEnumerable<WeatherForecast> _forecasts = CreateForecasts();
        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        private static IEnumerable<WeatherForecast> CreateForecasts()
        {
            string[] summaries = new[] {
                "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
            };
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Id = Guid.NewGuid().ToString(),
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = summaries[Random.Shared.Next(summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return _forecasts;
        }

        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            WeatherForecast result = _forecasts.FirstOrDefault(fc => fc.Id == id);
            if (result == null)
                return NotFound();
            return Ok(result);
        }
    }
}