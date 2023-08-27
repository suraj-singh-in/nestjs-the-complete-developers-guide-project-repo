import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/hi")
  getRootRoute() {
    return "Hi There !";
  }

  @Get('/bye')
  getByThere(){
    return 'Bye There !'
  }
}
