import {
  messageReducer,
  sendMessage,
  deleteMessage,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
} from "../messages";
import { DELETE_CONVERSATION } from "../../types";
describe("messages reducer", () => {
  describe("other types", () => {
    it("send message", () => {
      const MESSAGE = { author: "Bot Robot", message: "test message" };
      const state = messageReducer(
        { messages: {} },
        sendMessage("chat1", MESSAGE)
      );

      expect(state.messages.chat1).toBeDefined();
      expect(state.messages.chat1.length).toBe(1);
      expect(state.messages.chat1[0].message).toBe(MESSAGE.message);
    });

    // it("delete message", () => {
    //   const ID = 1;

    //   const state = messageReducer(
    //     {
    //       messages: {
    //         chat1: [{ id: 1 }, { id: 2 }],
    //       },
    //     },
    //     deleteMessage("chat1", ID)
    //   );

    //   expect(state.messages.chat1.length).toBe(2);
    //   expect(state.messages.chat1.find((i) => i.id === ID)).toBeUndefined();
    // });

    // it("delete conversation", () => {
    //   const ROOM_ID = "chat1";

    //   const state = messageReducer(
    //     {
    //       messages: {
    //         chat1: [],
    //       },
    //     },
    //     { type: DELETE_CONVERSATION, payload: ROOM_ID }
    //   );

    //   expect(state.messages[ROOM_ID]).toBeUndefined();
    // });
  });
  describe("get messages types", () => {
    it("start", () => {
      const state = messageReducer(
        { pending: false, error: "error" },
        getMessagesStart()
      );
      expect(state.pending).toBe(true);
      expect(state.error).toBe(null);
    });

    it("success", () => {
      const MESSAGES = "test messages";

      const state = messageReducer(
        { pending: true, messages: {} },
        getMessagesSuccess(MESSAGES)
      );

      expect(state.pending).toBe(false);
      expect(state.messages).toBe(MESSAGES);
    });
    it("error", () => {});
  });
});
