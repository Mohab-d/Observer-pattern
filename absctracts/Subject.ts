import Observer from "./Observer";

abstract class Subject {
  protected _observers: Observer[] = [];

  public attach(observer: Observer): Subject {
    this._observers.push(observer);
    return this;
  }

  public deattach(observer: Observer): Subject {
    this._observers = this._observers.filter((o) => o !== observer);
    return this;
  }

  public notify() {
    this._observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

export default Subject;
