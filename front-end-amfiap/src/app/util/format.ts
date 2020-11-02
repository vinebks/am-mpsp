import moment from 'moment';
import 'moment/locale/pt-br';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import config from '../config';

moment.locale('pt-br');

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat(config.lang_config.locale, {
    style: 'currency',
    currency: config.lang_config.currency,
  }).format(value);

export const formatNumber = (value: number): string =>
  new Intl.NumberFormat(config.lang_config.locale).format(value);

export const formatDate = (date: Date, format: string): string =>
  moment(date).utc().format(format);

export const format_cpf = (document: string): string =>
  document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

export const format_cnpj = (document: string): string =>
  document.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');

export const format_phone = (phone_number: string): string => {
  const phone = parsePhoneNumberFromString(phone_number, 'BR');

  if (phone) return phone.format('NATIONAL');

  return '';
};
export const sanitize = (document: string): string =>
  document.replace(/\.|-|\/|\(|\)|\s/g, '');
