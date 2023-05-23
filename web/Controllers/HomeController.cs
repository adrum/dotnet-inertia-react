using Microsoft.AspNetCore.Mvc;
using InertiaCore;

namespace dotnet_inertia_vite.Controllers;

[Route("/")]
public class HomeController : ControllerBase
{
    public HomeController()
    {
    }

    [HttpGet]
    public Task<InertiaCore.Response> Index()
    {
        var data = new
        {
            Message = "Hello, World!",
        };

        return Task.FromResult(Inertia.Render("Home/Index", data));
    }
}

