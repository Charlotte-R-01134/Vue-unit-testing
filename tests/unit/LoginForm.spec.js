import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  test('emits an event with a user data payload', async () => {
    const wrapper = mount(LoginForm)
    // 1. Find test input
    const input = wrapper.find('input[type="text"]') // in future use `data-testid="test-input"` attribute then call using `wrapper.find('[data-testid="test-input"]')`
    // 2. Set value for test input
    await input.setValue('Adam Jahr')
    // 3. Simulate form submission
    await wrapper.trigger('submit')
    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)
    // 5. Assert payload is correct
    const expectedPayload = { name: 'Adam Jahr' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
