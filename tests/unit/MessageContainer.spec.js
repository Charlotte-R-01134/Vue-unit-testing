import MessageContainer from '@/components/MessageContainer.vue'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  test('Wraps MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
      global: {
        stub: {
          MessageSidplay: {
            template: '<p data-testid="message">Hello from the db!</p>',
          },
        },
      },
    })

    const message = wrapper.find('[data-testid="message"]').text()
    expect(message).toEqual('Hello from the db!')
  })
})
