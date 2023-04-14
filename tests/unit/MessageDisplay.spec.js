import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios', () => ({
  getMessage: jest.fn(),
}))
beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  test('Calls getMessage and displays message', async () => {
    const mockMessage = 'Hello from the db!'
    // mock the API call
    getMessage.mockResolvedValueOnce({ text: mockMessage })
    const wrapper = mount(MessageDisplay)
    // wait for promise to resolve
    await flushPromises()
    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1)
    // check that component displays message
    const displayedError = wrapper.find('[data-testid="message"]').text()
    expect(displayedError).toBe(mockMessage)
  })

  test('Displays an error when getMessage call fails', async () => {
    const mockError = 'Oops! Something went wrong.'
    getMessage.mockRejectedValueOnce(mockError)
    const wrapper = mount(MessageDisplay)

    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1)
    const displayedError = wrapper.find('[data-testid="message-error"]').text()
    expect(displayedError).toEqual(mockError)
  })
})
