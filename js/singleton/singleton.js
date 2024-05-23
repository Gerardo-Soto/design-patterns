/**
 *
 *
 */

class Votes{
  static instance = undefined;

  constructor(version){
    this.version = version;
  };

  static getInstance(version){
    if (!Votes.instance) {
      Votes.instance = new Votes(version);
    };

    return Votes.instance;
  };

};


function appVotes() {
  const votes1 = Votes.getInstance('0.0.1');
  const votes2 = Votes.getInstance('0.0.2');

  console.log(`votes1 === votes2: ${votes1 === votes2}`);
  //console.log(votes1.getVersion);

  const version = votes1.version
  console.log(`version: ${version}`);
};

appVotes();
