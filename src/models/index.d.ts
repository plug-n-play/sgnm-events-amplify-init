import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum CountryEnum {
  INDIA = "INDIA",
  US = "US",
  CANADA = "CANADA",
  UK = "UK",
  AUSTRALIA = "AUSTRALIA",
  MALAYSIA = "MALAYSIA",
  SINGAPORE = "SINGAPORE"
}



type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly country: CountryEnum | keyof typeof CountryEnum;
  readonly city: string;
  readonly venue: string;
  readonly address1: string;
  readonly address2?: string | null;
  readonly startDate: string;
  readonly endDate: string;
  readonly phone: string;
  readonly time: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly country: CountryEnum | keyof typeof CountryEnum;
  readonly city: string;
  readonly venue: string;
  readonly address1: string;
  readonly address2?: string | null;
  readonly startDate: string;
  readonly endDate: string;
  readonly phone: string;
  readonly time: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}