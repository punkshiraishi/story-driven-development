import { User } from "../models/user"
import UserInfoCard from "./UserInfoCard.vue"

const ARG_TYPES = {
  email: {
    control: {
      type: "select",
      options: {
        none: "",
        normal: "hogehoge@example.com",
        long: "hogeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee@email.com",
      },
    },
    defaultValue: "hogehoge@example.com",
  },
  permission: {
    control: {
      type: "select",
      options: ["admin", "general", "guest"],
    },
  },
}

export default {
  title: "UserInfoCard",
  component: UserInfoCard,
  argTypes: ARG_TYPES,
}

export const basic = () => ({
  components: {
    UserInfoCard,
  },
  data: (vue: Vue) => {
    const { email } = vue.$props

    const user = new User(123, "user name", email)

    return {
      user,
    }
  },
  props: Object.keys(ARG_TYPES),
  template: `
    <UserInfoCard
      :user="user"
      :permission="permission"
    />
  `,
})
