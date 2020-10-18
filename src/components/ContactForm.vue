<template>
  <transition name="fade">
    <div v-if="show" class="form-container">
      <div class="form">
        <div class="toolbar">
          <i @click="hide" class="fas fa-times"></i>
        </div>
        <div class="content">
          <h2>Contact me</h2>
          <form action="/" method="POST" @submit.prevent>
            <label for="name">Name </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              v-model="name"
              required
            />
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              v-model="email"
              required
            />
            <label for="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Your message subject"
              v-model="subject"
              required
            />
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="9"
              placeholder="Your message here..."
              v-model="message"
              required
            ></textarea>
            <button type="submit">Send message</button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ContactForm",
  props: {
    show: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  watch: {
    show: function (newValue) {
      if (newValue) {
        // overflow-x: hidden and width: 100vw in App.vue makes so that the content does not jump when the scroll disappears
        document.documentElement.style.overflowY = "hidden";
        window.addEventListener("keyup", this.onEscapeKeyUp);
      } else {
        setTimeout(() => {
          document.documentElement.style.overflowY = "auto";
        }, 600);
        window.removeEventListener("keyup", this.onEscapeKeyUp);
      }
    },
  },
  methods: {
    hide() {
      this.$emit("hide");
    },
    onEscapeKeyUp(event) {
      if (event.which === 27) {
        this.hide();
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(27, 25, 34, 0.9);
  z-index: 1000;
}

.form {
  width: 40%;
  height: 85vh;
  margin: 7.5vh auto;
  background-color: var(--light);
}

.toolbar {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

i:hover {
  color: var(--gray);
  cursor: pointer;
}

.fade-enter-active {
  opacity: 0;
  transition: opacity 0.7s;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}

.content {
  padding: 0 50px;
  height: 100%;
}
.content h2 {
  padding-bottom: 10px;
  font-size: 32px;
}
.content form {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content form label {
  padding: 12px 0 5px;
}
.content form input,
.content form textarea {
  padding: 5px 7px;
}
.content form button {
  margin-top: 30px;
  padding: 12px;
  color: var(--light);
  background-color: var(--dark);
  font-size: 16px;
  border: none;
}
</style>