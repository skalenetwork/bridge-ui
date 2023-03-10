import './App.scss';

import Main from './Main';
import Transfer from './components/Transfer';
import Faq from './components/Faq';
import Terms from './components/Terms';
import ExitGasWallet from './components/ExitGasWallet';
import TransferTo from './components/TransferTo';

import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Router(props: any) {
    const location = useLocation();
    return (
        <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Routes>
                    <Route
                        index
                        element={<Main address={props.address} metaport={props.metaport} />}
                    />
                    <Route path="bridge" >
                        <Route
                            path="exit"
                            element={<ExitGasWallet />}
                        />
                        <Route path="transfer" >
                            <Route
                                path=":from"
                                element={<TransferTo address={props.address} metaport={props.metaport} />}
                            />
                            <Route
                                path=":from/:to"
                                element={<Transfer address={props.address} metaport={props.metaport} />}
                            />
                        </Route>
                    </Route>

                    <Route path="other" >
                        <Route
                            path="faq"
                            element={<Faq />}
                        />
                        <Route
                            path="terms-of-service"
                            element={<Terms />}
                        />
                    </Route>
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}
