import MTProto from 'telegram-mtproto'

const phone = {
    num : '+9996620001',
    code: '22222'
}

const config = {
    id: 111111, // https://my.telegram.org/apps
    hash: 'SOMEBIGNUMBERFROMTELEGRAM'
};

const api = {
    layer          : 57,
    initConnection : 0x69796de9,
    api_id         : 49631
}

const server = {
    dev: true
}

const client = MTProto({ server, api })

class TelegramApi {
  config: any;
  mtProto: any;

  constructor(config: any, mtProto: any) {
      this.config = config;
      this.mtProto = mtProto;
  }

  sendCode(phone: string) {
      return this.mtProto('auth.sendCode', {
          phone_number: phone,
          current_number: false,
          api_id: this.config.id,
          api_hash: this.config.hash
      });
    }
}

const telegramApi = new TelegramApi(config, client);

export default telegramApi