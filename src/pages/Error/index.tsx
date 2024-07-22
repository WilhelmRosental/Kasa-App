import React from 'react'
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './index.scss'

interface RouteErrorResponse {
  status: number
  statusText: string
  data: any
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteErrorResponse

  return (
    <>
      <div className="body-container">
        <Header />
        <main className="main-errorPage">
          {error && isRouteErrorResponse(error) ? (
            <>
              <h2 className="errorPage__title">{error.status}</h2>
              {error.status === 404 && (
                <p className="errorPage__msg fontSize-title">
                  Oups! La page que vous demandez n&apos;existe pas.
                </p>
              )}
              {error.status === 401 && (
                <p className="errorPage__msg fontSize-title">
                  Oups! Vous n&apos;êtes pas autorisés à voir ça.
                </p>
              )}
              {error.status === 503 && (
                <p className="errorPage__msg fontSize-title">
                  Oups! On dirait que notre API est en panne.
                </p>
              )}
              {error.status === 418 && (
                <p className="errorPage__msg fontSize-title">🫖</p>
              )}
            </>
          ) : (
            <>
              <h2 className="errorPage__title">Erreur</h2>
              <p className="errorPage__msg fontSize-title">
                Oups! Quelque chose s&apos;est mal passé.
              </p>
            </>
          )}
          <Link className="errorPage__link fontSize-paragraph" to="/">
            Retourner sur la page d&apos;accueil
          </Link>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage
