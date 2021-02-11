<template>
    <section id="contact">
        <h1>Get in touch</h1>
        <div>
            <p class="fadeCopy">
                <a :href="'mailto:' + email">
                    {{ email }}
                </a>
                <span @click="copyToClipboard(email)"
                    ><i class="far fa-copy" title="Copy to clipboard"></i
                ></span>
            </p>
            <p class="fadeCopy phone">
                <a :href="'tel:' + phoneNum">{{ phoneNum }}</a>
                <span @click="copyToClipboard(phoneNum)"
                    ><i class="far fa-copy" title="Copy to clipboard"></i
                ></span>
            </p>
            <ButtonItem @click="showForm = true" size="lg" class="contact"
                >Contact me</ButtonItem
            >
        </div>
    </section>
    <div class="alert-box" :class="alertClass">
        <i :class="alertIcon"></i>{{ alertText }}
    </div>
    <ContactForm :show="showForm" @hide="showForm = false" />
</template>

<script>
import ButtonItem from "./utilities/ButtonItem.vue";
import ContactForm from "./ContactForm.vue";

export default {
    name: "ContactSection",
    data() {
        return {
            email: "maciej.ziemichod@gmail.com",
            phoneNum: "(+48) 781 295 692",
            alertText: "",
            alertClass: "",
            alertIcon: "",
            showForm: false,
        };
    },
    components: {
        ButtonItem,
        ContactForm,
    },
    methods: {
        alert(text, type, duration = 1000) {
            const types = {
                success: {
                    alertIcon: "fas fa-check",
                    alertClass: "success",
                },
                error: {
                    alertIcon: "fas fa-times",
                    alertClass: "error",
                },
            };

            if (!text || !(type in types)) {
                return;
            }

            const { alertIcon, alertClass } = types[type];
            this.alertText = text;
            this.alertIcon = alertIcon;
            this.alertClass = alertClass + " show-visible show-opacity";
            setTimeout(() => {
                this.alertClass = alertClass + " show-visible";
            }, duration - 400);
            setTimeout(() => {
                this.alertClass = "";
            }, duration);
        },
        fallbackCopyToClipboard(text) {
            const textArea = document.createElement("textarea");
            textArea.value = text;

            // Avoid scrolling to bottom
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";

            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                const successful = document.execCommand("copy");
                const msg = successful ? "successful" : "unsuccessful";
                console.log("Fallback: Copying text command was " + msg);
                this.alert("Copied to clipboard", "success", 1800);
            } catch (err) {
                console.error("Fallback: Oops, unable to copy", err);
                this.alert("Error: unable to copy to clipboard", "error", 1800);
            }

            document.body.removeChild(textArea);
        },
        copyToClipboard(text) {
            if (!navigator.clipboard) {
                this.fallbackCopyToClipboard(text);
                return;
            }
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    console.log("Async: Copying to clipboard was successful!");
                    this.alert("Copied to clipboard", "success", 1800);
                })
                .catch((err) => {
                    console.error("Async: Could not copy text: ", err);
                    this.alert(
                        "Error: unable to copy to clipboard",
                        "error",
                        1800
                    );
                });
        },
    },
};
</script>

<style scoped>
section {
    text-align: center;
    position: relative;
}

div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
}

.phone {
    margin-top: 10px;
}

.contact {
    margin-top: 50px;
}

p {
    margin: 0 auto;
    font-size: 20px;
    padding: 10px 30px;
    width: fit-content;
    text-align: center;
    position: relative;
}

span {
    position: absolute;
    right: -5px;
}

.fadeCopy i {
    transition: opacity 0.4s;
    opacity: 0;
}
.fadeCopy:hover i {
    opacity: 1;
}

.alert-box {
    visibility: hidden;
    position: fixed;
    top: 85%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-color: var(--light);
    transition: opacity 0.4s;
    opacity: 0;
    padding: 20px;
    border: 1px solid var(--dark);
}
.alert-box i {
    padding-right: 10px;
}
.alert-box.success {
    color: #08c315;
    background-color: #e7f9f1;
    border-color: #96e69d;
}
.alert-box.error {
    color: #ff000d;
    background-color: #faeded;
    border-color: #fd8a90;
}
.alert-box.show-opacity {
    opacity: 1;
}
.alert-box.show-visible {
    visibility: visible;
}

@media (max-width: 319px) {
    #contact p,
    #contact button {
        font-size: 16px;
    }
}
</style>