import * as React from 'react'
import routes from './routes'
import { Route, Routes } from 'react-router-dom'
import './styles.css'

export default function App ({ apiData }) {
  return (
    <React.Fragment>
      <div className='container'>
        <Routes>
          {routes.map(({ path, getBlogData, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={<Component  apiData={apiData} getBlogData={getBlogData} />}
            />
          ))}
        </Routes>
      </div>
    </React.Fragment>
  )
}