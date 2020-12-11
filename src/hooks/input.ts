import { useState } from 'react'

export function useUpdateInput(initialValue: string | number | undefined) {
  const [value, setValue] = useState(initialValue)
  return { value, onChange: (event: any) => setValue(event.target.value) }
}
