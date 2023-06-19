import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';
import { useTranslation } from 'react-i18next';

const AppRouter = () => {
    const { t } = useTranslation();
    return (
        <Suspense fallback={(
            <div>
                {t('Loading')}
                ...
            </div>
        )}
        >
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        element={(
                            <div className="page-wrapper">
                                <Suspense fallback={(
                                    <div>
                                        {t('Loading')}
                                        ...
                                    </div>
                                )}
                                >
                                    {element}
                                </Suspense>
                            </div>

                        )}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
export default AppRouter;
