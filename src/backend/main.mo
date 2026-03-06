import Time "mo:core/Time";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Int "mo:core/Int";

actor {
  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactMessage {
    public func compareByTime(message1 : ContactMessage, message2 : ContactMessage) : Order.Order {
      Int.compare(message1.timestamp, message2.timestamp);
    };
  };

  let contactMessages = Map.empty<Principal, ContactMessage>();
  var visitCount = 0;

  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, message : Text) : async () {
    let contactMessage : ContactMessage = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactMessages.add(caller, contactMessage);
  };

  public query ({ caller }) func getSortedContactMessages() : async [ContactMessage] {
    contactMessages.values().toArray().sort(ContactMessage.compareByTime);
  };

  public shared ({ caller }) func incrementVisitorCount() : async Nat {
    visitCount += 1;
    visitCount;
  };

  public query ({ caller }) func getVisitorCount() : async Nat {
    visitCount;
  };

  public shared ({ caller }) func getNextId() : async Principal {
    Principal.fromText("abcdefgh");
  };

  public shared ({ caller }) func trap() : async {} {
    Runtime.trap("This function always traps.");
  };
};
