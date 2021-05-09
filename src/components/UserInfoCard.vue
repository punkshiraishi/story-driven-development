<template>
  <div
    class="flex flex-col border border-solid border-gray-600 rounded-lg p-3"
    :style="{ width: '300px' }"
  >
    <div class="flex flex-row space-x-3">
      <div>ID:</div>
      <div>{{ user.id }}</div>
    </div>
    <div class="flex flex-row space-x-3">
      <div>name:</div>
      <div>{{ user.name }}</div>
    </div>
    <div
      v-if="permission === 'admin'"
      class="flex flex-row space-x-3"
    >
      <div>email:</div>
      <div class="truncate w-full">
        {{ user.email ? user.email : '-' }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { User } from "../models/user"
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class UserInfoCard extends Vue {
  /**
   * ログインしているユーザの権限
   *
   * `MyInformation` クラスの `permission` を使う
   */
  @Prop({ required: true })
  permission!: "admin" | "general" | "guest"

  /**
   * このカードに表示したいユーザ
   */
  @Prop({ required: true })
  user!: User
}
</script>
