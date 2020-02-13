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

export default TelegramApi;