<template>
    
    <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
            <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" fill="currentColor" class="bi bi-person-bounding-box profilePic" viewBox="0 0 16 16">
                        <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    </svg>
                    <span class="font-weight-bold">{{this.$store.getters.getNameVorname}}</span>
                    <span class="text-black-50">{{this.$store.getters.getKundenDaten.Email}}</span>
                    <span> </span>
                </div>
            </div>
            <div class="col-md-5">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">Profil Bearbeiten</h4>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="Name" v-model=this.$store.getters.getKundenDaten.Name></div>
                        <div class="col-md-6"><label class="labels">Vorname</label><input type="text" class="form-control" v-model=this.$store.getters.getKundenDaten.Vorname placeholder="Vorname"></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder="Email" v-model=this.$store.getters.getKundenDaten.Email></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">Password</label>
                            <div class="input-group">
                                <input type="password" class="form-control" placeholder="Passwort" value="FakePasswort" disabled>
                                <a class="input-group-text" id="basic-addon2" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 text-center"><button class="input-group-text saveButton" type="button">Speichern</button></div>
                </div>
            </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center experience"><span>Passwort ändern</span></div><br>
              <div class="col-md-12"><label class="labels">Neues Passwort</label><input type="password" class="form-control" placeholder="Passwort" value=""></div> <br>
              <div class="col-md-12"><label class="labels">Passwort bestätigen</label><input type="password" class="form-control" placeholder="Passwort bestätigen" value=""></div>
              <div class="mt-3 text-center"><button class="input-group-text saveButton" type="button">Ändern</button></div>
            </div>
        </div>
        </div>
    </div>

  </template>
  
  <script>
  
  export default {
    name: 'ProfileView',
    components: {
      
    },
     created(){
      const kunden_id = this.$store.getters.getKundenId;
    if(kunden_id == null){
      this.$router.push({name: "login"});
    }
      
    },
  }
  </script>
  
  <style scoped>
  .profilePic{
    margin-top: 2em;
    margin-bottom: 1em;
  }
  .saveButton{
    position: relative;
    left: 100%;
    transform: translate(-100%, 0);
  }
  .border-right{
    border-right: 1px solid rgba(192, 176, 176, 0.425);
  }

  </style>