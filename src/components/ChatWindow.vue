<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div
        v-for="doc in formattedDocuments"
        :key="doc.id"
        class="single"
        :class="{ me: user && user.uid == doc.userUid }"
      >
        <div class="msg-container">
          <span class="name">{{ doc.name }}</span>
          <span class="message">{{ doc.message }}</span>
          <span class="created-at">{{ doc.createdAt }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "vue";
import getUser from "@/composables/getUser";

export default {
  setup() {
    const { user } = getUser();
    const { documents, error } = getCollection("messages");

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    const messages = ref(null);

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { documents, error, formattedDocuments, messages, user };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
  display: flex;
}
.single.me {
  justify-content: flex-end;
}
.single.me .msg-container {
  background-color: rgb(46, 124, 46);
  border-radius: 10px 10px 0px 10px;
}
.msg-container {
  background-color: rgb(99, 96, 96);
  padding: 10px;
  border-radius: 10px 10px 10px 0;
}
.single.me .name {
  display: none;
}
.name {
  font-weight: bold;
  display: block;
  color: white;
  /* padding-bottom: 5px; */
  margin-top: -5px;
}
.messages {
  max-height: 400px;
  overflow: auto;
  color: white;
}
.created-at {
  color: #bfbfbf;
  font-size: 12px;
  padding-left: 10px;
}
</style>
