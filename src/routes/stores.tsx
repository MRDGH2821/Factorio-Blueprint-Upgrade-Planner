import { createContext } from '@builder.io/qwik';
import { BlueprintInputStore } from '../components/ts-interfaces/blueprint';
import { ConfigInputStore } from '../components/ts-interfaces/config';

export const BPContext = createContext<BlueprintInputStore>('bp-input-context');
export const configContext = createContext<ConfigInputStore>('config-input-context');
