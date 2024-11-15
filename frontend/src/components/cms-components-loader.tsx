import { MainComponentsInterface } from '@/interfaces/components'
import dynamic from 'next/dynamic'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mainComponents: { [key: string]: React.ComponentType<any> } = {
  componentHeroBanner: dynamic(() => import('./cms/hero-banner/component'))
}

const MainComponentsLoader = ({ components }: { components: MainComponentsInterface[] }) => {
  return (
    <>
      {components.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (element: any, index: number) => {
          const contentType = element.sys.contentType?.sys.id
          const DynamicComponent = mainComponents[contentType]

          if (!DynamicComponent) {
            console.warn(`No component found for type: ${contentType}`)
            return <div key={index}>Component not found</div>
          }

          return <DynamicComponent {...element.fields} key={index} />
        }
      )}
    </>
  )
}

export default MainComponentsLoader
