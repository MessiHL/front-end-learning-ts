/*
  类实现接口§
  实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，
  有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），
  用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。

  举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。
  这时候如果有另一个类，车，也有报警器的功能，
  就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它
*/

interface Alarm{
  alert():void
}

class Door{

}

interface Light{
  lightOn():void;
  lightOff():void;
}

class SecurityDoor extends Door implements Alarm{
  alert(): void {
    console.log('SecurityDoor alert!');
  }
}

// 一个类实现多个接口
class Car implements Alarm,Light{
  lightOn(): void {
    console.log('Car lightOn!');
  }
  lightOff(): void {
    console.log('Car lightOff!');
  }
  alert(): void {
    console.log('Car alert!');
  }
}