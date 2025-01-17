﻿using Microsoft.AspNetCore.Mvc;
using ProGearAPI.Models.EF;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;


namespace ProGearAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

       
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }
        
        static User _user = new User();

       // check whether user exists in db
       [HttpGet]
       [Route("CheckForUser")]
       public IActionResult CheckForUser(string userid)
        {
            User user = new User();
            bool IsAlreadyRegistered = user.Check(userid);
            if (!IsAlreadyRegistered)
            {
                return Ok("User Not Registered");
            }
            else
            {
                return Ok("User Registered");
            }
           
        }
        // register new user
        [HttpPost]
        [Route("Register")]
        public IActionResult Register(User user)
        {
            try
            {
                user.NewRegister(user);
                return Created("User has been Successfully Registered", user);
            }
            catch(System.Exception ex)
            {
                return BadRequest(ex);  
            }
        }
    }
}