Vue.config.devtools = true;

const app = new Vue ({
    el:'#root',
    data:{
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        selectedContact: null,
        newMessage: '',
        search: '',
    },
    mounted() {
        this.selectedContact = this.contacts[0]
    },
    methods: {
        getAvatarPhoto(contact) {
            if(contact == null) {
                return '';
            }
            return 'img/avatar' + contact.avatar + '.jpg'
        },
        getUser(contact) {
            this.selectedContact = contact;
            console.log(this.selectedContact);
        },

        LastMessage(contact) {
            if (contact.messages == null) {
               return '';
            }
            return contact.messages[contact.messages.lenght - 1].message
        },

        addMessage() {
            if(this.newMessage != '') {
                let newMessage = this.newMessage;
                let tmp = {
                    date: fayjs().format('DD/MM/YYYY hh:mm:ss'),
                    message: newMessage,
                    status: 'sent',
                };
                this.selectedContact.messages.push(tmp);
                this.newMessage = '';
            }
            setTimeout(() => {
                let tmp = {
                    date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
                    message: 'ok',
                    status: 'received',
                };
                this.selectedContact.messages.push(tmp);
            },2500);
        }
    }
})







