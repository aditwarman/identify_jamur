<template>
  <v-container fluid>
    <v-row align="center" justify="center" wrap>
      <v-flex md8>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            Cap-Shape/Bentuk Tudung
          </v-stepper-step>

          <v-stepper-content step="1">
            <!-- <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card> -->
            <v-list>
              <v-list-item-group v-model="model">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                >
                  <v-list-item-icon>
                    <v-img width="70px" :src="item.avatar"></v-img>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.subtext"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>

          <v-stepper-content step="2">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step step="4">View setup instructions</v-stepper-step>
          <v-stepper-content step="4">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    e6: 0,
    items: [
        {
          icon: 'mdi-inbox',
          text: 'Inbox',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          subtext: 'Secondary line text Lorem ipsum dolor sit amet,'
        },
        {
          icon: 'mdi-star',
          text: 'Star',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          subtext: 'Secondary line text Lorem ipsum dolor sit amet,'
        },
        {
          icon: 'mdi-send',
          text: 'Send',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          subtext: 'Secondary line text Lorem ipsum dolor sit amet,'
        },
        {
          icon: 'mdi-email-open',
          text: 'Drafts',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          subtext: 'Secondary line text Lorem ipsum dolor sit amet,'
        },
      ],
      model: 1
  }),
};
</script>
