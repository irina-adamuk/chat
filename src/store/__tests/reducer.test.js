import {
  messageReducer,
  sendMessage,
  // deleteMessage,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
	createMessageStart,
	createMessageSuccess,
	createMessageError,
	removeMessageStart,
	removeMessageSuccess,
	removeMessageError
} from "../messages";
// import { DELETE_CONVERSATION } from "../../types";
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
    it("error", () => {
			const ERROR = "test error"
			const state = messageReducer(
        { pending: true, error: null },
        getMessagesError(ERROR)
      );
			expect(state.pending).toBe(false);
			expect(state.error).toBe(ERROR);
		});
  });

	describe("create message types", () => {
		it("start", () => {
      const state = messageReducer(
        { pendingCreate: false, errorCreate: "error" },
        createMessageStart()
      );
      expect(state.pendingCreate).toBe(true);
      expect(state.errorCreate).toBe(null);
    });
		it("success", () => {
      const MESSAGE = { author: "Bot Robot", message: "test message" };

      const state = messageReducer(
        { messages: {} },
        createMessageSuccess("chat1", MESSAGE)
      );

      expect(state.messages.chat1).toBeDefined();
      expect(state.messages.chat1.length).toBe(1);
      expect(state.messages.chat1[0].message).toBe(MESSAGE.message);

      expect(state.pendingCreate).toBe(false);
      expect(state.messages.chat1[0].message).toBe(MESSAGE.message);
    });
		it("error", () => {
			const ERROR = "test error"
			const state = messageReducer(
        { pendingCreate: true, errorCreate: null },
        createMessageError(ERROR)
      );
			expect(state.pendingCreate).toBe(false);
			expect(state.errorCreate).toBe(ERROR);
		});
	})

	describe("remove message types", () => {
		it("start", () => {
      const state = messageReducer(
        { pendingRemove: false, errorRemove: "error" },
        removeMessageStart()
      );
      expect(state.pendingRemove).toBe(true);
      expect(state.errorRemove).toBe(null);
    });
		it("success", () => {
      const ID = 1;

      const state = messageReducer(
        {
          messages: {
            chat1: [{ id: 1 }, { id: 2 }],
          },
        },
        removeMessageSuccess("chat1", ID)
      );

      expect(state.messages.chat1.length).toBe(1);
      expect(state.messages.chat1.find((i) => i.id === ID)).toBeUndefined();
			expect(state.pendingRemove).toBe(false);
    });
		it("error", () => {
			const ERROR = "test error"
			const state = messageReducer(
        { pendingRemove: true, errorRemove: null },
        removeMessageError(ERROR)
      );
			expect(state.pendingRemove).toBe(false);
			expect(state.errorRemove).toBe(ERROR);
		});
	})
});
