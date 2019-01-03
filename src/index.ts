class HelloWorld {
  public foo(worldName: string): void {
    console.log("Hello World - " + worldName);
  }
}

function main() {
  new HelloWorld().foo("Moon");
}

main();
