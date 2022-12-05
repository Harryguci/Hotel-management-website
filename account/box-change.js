export default class Box_change {
  constructor(roomName, clientName, checkin, checkout) {
    this.roomName = roomName;
    this.clientName = clientName;
    this.checkin = checkin;
    this.checkout = checkout;
  }

  htmlScope = () => {
    return `
            <h2>${this.roomName}</h2>
            <form action="">
                <div class="mb-3">
                    <label for="" class="form-label">Room: </label>
                    <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                        value="${this.roomName}">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Your name: </label>
                    <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                        value="${this.clientName}">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Checkin date: </label>
                    <input type="date" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                        value="${this.checkin}">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Checkout date: </label>
                    <input type="date" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                        value="${this.checkout}">
                </div>
                <div class="thumbnail">
                    <img src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg"
                        alt="room image">
                </div>
            </form>`;
  };
}

// export {Box_change};

/* 
    <div class="box-change center">
            <i class="bi bi-x-lg position-absolute" style="top: 20px; right: 20px; font-size: 20px;"></i>
            <h2>View beach room</h2>
            <form action="">
                <div class="mb-3">
                    <label for="" class="form-label">Room: </label>
                    <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                        value="View beach room">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Your name: </label>
                    <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                        value="Chu Quang Huy">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Checkin date: </label>
                    <input type="date" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                        value="">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Checkout date: </label>
                    <input type="date" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                        value="">
                </div>
                <div class="thumbnail">
                    <img src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg"
                        alt="room image">
                </div>
            </form>
    </div>

*/
