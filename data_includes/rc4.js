var shuffleSequence = seq("intro", "info", "startprac", "practice", "endprac", sepWith("sep", anyOf("filler", startsWith("StimZero"), startsWith("StimThat"))), "contact", "sr", "code");

var ds = "RegionedSentence";
var qs = "Question";

var manualSendResults = true;

var defaults = [
    "Separator", {
        transfer: 1500,
        normalMessage: "Please wait for the next sentence",
        errorMessage: "Wrong. Please wait for the next sentence" },
    "RegionedSentence", {
        mode: "self-paced reading" },
    "Question", {
        as: ["Yes","No"],
        randomOrder: false,
        hasCorrect: true }
];

var items = [
    ["sr", "__SendResults__", { }],
    ["sep", "Separator", {}],
    ["intro", "Message", {consentRequired: true, html: {include: "intro.html"}}],
    ["info", "Form", {html: {include: "info.html"}}],
    ["startprac", "Message", {consentRequired: false, html: {include: "start_practice.html"}}],
    [["practice",1], ds, {s: ["S1:_She's smart at what she does.","She knows how to do that.","S2:_She knows how to twist this around."], id:"F.31.SBAR"}],
    [["practice",2], ds, {s: "S1:_Yeah, I would love to have a computer, they, but they're so expensive.", id:"F.3.noSBAR"}, qs, {q: "Are  they cheap?" , hasCorrect: "No", randomOrder: false}, qs, {q: "Are computers nice to have?", hasCorrect: "Yes", randomOrder: false}],
    [["practice",3], ds, {s: ["S1:_Right I wouldn't be, surprised.","S2:_I'm just going to have to put it, in the car sometimes and listen to it."], id:"F.1.noSBAR"}],
    [["practice",4], ds, {s: "S1:_I have been working at, uh, as an accountant at the medical school here in Dallas and I have watched, uh, Gross Anatomy.", id:"F.2.noSBAR"}, qs, {q: "Is it possible to watch Gross Anatomy?" , hasCorrect: "Yes", randomOrder: false}, qs, {q: "Are there no medical schools in Dallas?" , hasCorrect: "No", randomOrder: false}],
    ["endprac", "Message", {consentRequired: false, html: {include: "end_practice.html"}}],
    [["filler",6], ds, {s: ["S1:_Uh-huh.","S2:_And we've had it for a while, but all of a sudden it just wasn't working."], id:"F.19.noSBAR"}],
    [["StimZero.OriginalZero",7], ds, {s: ["S1:_There's been a couple of other people, most of whom are like me that work in, in speech labs that are going to use database, eventually, so, it was fun.","So the day@NPHEAD1 it@RCSUBJ1 happens@RCVERB1 is ninety-eight percent of the planning usually."], id:"1"}],
    [["StimThat.OriginalZero",7], ds, {s: ["S1:_There's been a couple of other people, most of whom are like me that work in, in speech labs that are going to use database, eventually, so, it was fun.","So the day@NPHEAD1 that@COMPL it@RCSUBJ1 happens@RCVERB1 is ninety-eight percent of the planning usually."], id:"1"}],
    [["filler",8], ds, {s: ["S1:_Right.","S2:_But they really did.","It was, it was really amazing."], id:"F.54.noSBAR"}],
    [["filler",9], ds, {s: ["S1:_Oh, I know it.","S2:_We did have, uh, another novel, uh, experiment start this year.","Now we can put all our yard clippings out."], id:"F.38.noSBAR"}, qs, {q: "Do the yard clippings go out?", hasCorrect: "Yes", randomOrder: false}, qs, {q: "Is there a new experiment?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalThat",[10,7]], ds, {s: ["S1:_And then tonight this woman called.","S2:_Yours is my second one.","S1:_And when it's cold I'm wearing sweatpants unless I'm going to something special@NPHEAD1 that@COMPL my@RCSUBJ1 daughter's@RCSUBJ2 doing@RCVERB1 or something like that."], id:"2"}],
    [["StimZero.OriginalThat",[10,7]], ds, {s: ["S1:_And then tonight this woman called.","S2:_Yours is my second one.","S1:_And when it's cold I'm wearing sweatpants unless I'm going to something special@NPHEAD1 my@RCSUBJ1 daughter's@RCSUBJ2 doing@RCVERB1 or something like that."], id:"2"}],
    [["filler",11], ds, {s: ["S1:_And I grew up in a real not, I think not normal setting.","S2:_With all of you living so close together."], id:"F.27.noSBAR"}],
    [["filler",12], ds, {s: ["S1:_I got some good recipes from them sometimes, but...","S2:_You clip recipes."], id:"F.18.noSBAR"}, qs, {q: "Can recipes be clipped?" , hasCorrect: "Yes", randomOrder: false}, qs, {q: "Are there any good recipes?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalZero",[13,7]], ds, {s: ["S1:_You know, sometimes it's just so, seems so much easier just to take it and throw it in the trash, and have them pick it up than it is to smash the cans and drive it someplace to have them...","S2:_And there's only so much football@NPHEAD1 that@COMPL you@RCSUBJ1 can@RCVERB1 watch.@RCVERB2"], id:"3"}],
    [["StimZero.OriginalZero",[13,7]], ds, {s: ["S1:_You know, sometimes it's just so, seems so much easier just to take it and throw it in the trash, and have them pick it up than it is to smash the cans and drive it someplace to have them...","S2:_And there's only so much football@NPHEAD1 you@RCSUBJ1 can@RCVERB1 watch.@RCVERB2"], id:"3"}],
    [["filler",14], ds, {s: ["S1:_There, uh, there, uh there's a lot of hunters here.","S2:_Yeah, well I know how you feel."], id:"F.37.SBAR"}],
    [["filler",15], ds, {s: ["S1:_Oh.","S2:_It's Truth Or Dare and that was pretty scandalous."], id:"F.46.noSBAR"}],
    [["StimZero.OriginalThat",[16,7]], ds, {s: ["S1:_Do y'all start planning real far ahead of time?","S2:_Well, no.","There's kind of a set pattern to it.","There is, ...Well, most of what they're talking about in Washington is is the crime problems@NPHEAD1 they're@RCSUBJ1 having@RCVERB1 there."], id:"4"}, qs, {q: "Are they ignoring the drug problem that they have in Washington D.C?" , hasCorrect: "No", randomOrder: false}],
    [["StimThat.OriginalThat",[16,7]], ds, {s: ["S1:_Do y'all start planning real far ahead of time?","S2:_Well, no.","There's kind of a set pattern to it.","There is, ...Well, most of what they're talking about in Washington is is the crime problems@NPHEAD1 that@COMPL they're@RCSUBJ1 having@RCVERB1 there."], id:"4"}, qs, {q: "Are they ignoring the drug problem that they have in Washington D.C?" , hasCorrect: "No", randomOrder: false}],
    [["filler",17], ds, {s: ["S1:_Uh-huh.","I'd never heard them before until I went in a music store and you know how you put the headphones on and listen to it."], id:"F.63.SBAR"}, qs, {q: "Do you put on headphones to hear the music?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler",18], ds, {s: "S1:_And nothing wanted to go, so it was like I had to go all the way back to the main drain and start all over.", id:"F.35.SBAR"}, qs, {q: "Was it necessary to start over again?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimZero.OriginalZero",[19,7]], ds, {s: ["S1:_Oh, that's good, that's good, or it's always good on top of something in the sandwich.","S2:_Yeah, yeah.","S1:_So hers was the first one@NPHEAD1 I@RCSUBJ1 got.@RCVERB1"], id:"5"}],
    [["StimThat.OriginalZero",[19,7]], ds, {s: ["S1:_Oh, that's good, that's good, or it's always good on top of something in the sandwich.","S2:_Yeah, yeah.","S1:_So hers was the first one@NPHEAD1 that@COMPL I@RCSUBJ1 got.@RCVERB1"], id:"5"}],
    [["filler",20], ds, {s: "S1:_it was a seventy mile trip everyday, you know, two ways was seventy miles.", id:"F.26.noSBAR"}, qs, {q: "Was it a seventy mile travel for two ways?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler",21], ds, {s: ["S1:_That's good and quick and easy.","S2:_That's always good."], id:"F.23.noSBAR"}],
    [["StimThat.OriginalThat",[22,7]], ds, {s: ["S1:_But, well, she had decided that it was, when we came back to the States, she decided that it was too, she didn't feel that public schools were, were safe.","See I went out to Payless Cashways here a couple of days ago as a matter of fact and got me one of those little can crushers@NPHEAD1 that@COMPL I@RCSUBJ1 could@RCVERB1 put@RCVERB2 on the wall."], id:"6"}],
    [["StimZero.OriginalThat",[22,7]], ds, {s: ["S1:_But, well, she had decided that it was, when we came back to the States, she decided that it was too, she didn't feel that public schools were, were safe.","See I went out to Payless Cashways here a couple of days ago as a matter of fact and got me one of those little can crushers@NPHEAD1 I@RCSUBJ1 could@RCVERB1 put@RCVERB2 on the wall."], id:"6"}],
    [["filler",23], ds, {s: "S1:_And then the ones in my apartment, half of which don't look real healthy, but I don't always get direct sun except in certain spots.", id:"F.61.SBAR"}, qs, {q: "Is there direct sun everywhere?" , hasCorrect: "No", randomOrder: false}, qs, {q: "Do the plants in the apartment look healthy?" , hasCorrect: "No", randomOrder: false}],
    [["StimThat.OriginalZero",[24,7]], ds, {s: ["S1:_That's on my list to see.","S2:_Yeah, it was, it was okay.","It was not, not a wonderful film...","I can remember the first year@NPHEAD1 that@COMPL I@RCSUBJ1 moved@RCVERB1 here."], id:"7"}],
    [["StimZero.OriginalZero",[24,7]], ds, {s: ["S1:_That's on my list to see.","S2:_Yeah, it was, it was okay.","It was not, not a wonderful film...","I can remember the first year@NPHEAD1 I@RCSUBJ1 moved@RCVERB1 here."], id:"7"}],
    [["filler",25], ds, {s: ["S1:_Yeah.","S2:_You sit there and when you're writing up budgets, you wonder, okay, how much money do we need?"], id:"F.36.SBAR"}, qs, {q: "When writing budgets, is the amount of money needed already known? " , hasCorrect: "No", randomOrder: false}],
    [["filler",26], ds, {s: ["S1:_And how big do they get?", "S2: Ours is, uh, on the small end."], id:"F.48.noSBAR"}],
    [["filler",27], ds, {s: ["S1:_And, uh, it's just human nature to walk through an open door.","So, and I would be glad to see that.","I hope I don't see a lot more single moms."], id:"F.34.SBAR"}, qs, {q: "Is the abundance of single moms a good sign?" , hasCorrect: "No", randomOrder: false}, qs, {q: "Is it natural to walk through an open door?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimZero.OriginalThat",[28,7]], ds, {s: ["S1:_And the judicial mishap in this event would be, hey, you got the wrong guy.","Look at that guy at E_Systems.","S2:_Yep.","S1:_I have a few favorites@NPHEAD1 I@RCSUBJ1 use@RCVERB1 more than others."], id:"8"}],
    [["StimThat.OriginalThat",[28,7]], ds, {s: ["S1:_And the judicial mishap in this event would be, hey, you got the wrong guy.","Look at that guy at E_Systems.","S2:_Yep.","S1:_I have a few favorites@NPHEAD1 that@COMPL I@RCSUBJ1 use@RCVERB1 more than others."], id:"8"}],
    [["filler",29], ds, {s: ["S1:_Okay.","S2:_And everybody loves it and it's so easy."], id:"F.30.noSBAR"}],
    [["filler",30], ds, {s: ["S1:_The b-, yes, and the broken families.","We, um, as I said, living in an area of Washington,_D.C., we definitely see this."], id:"F.66.SBAR"}, qs, {q: "Are there no residential areas in Washington, D.C.?" , hasCorrect: "No", randomOrder: false}],
    [["StimZero.OriginalZero",[31,7]], ds, {s: ["S1:_And what did, did you ever try using like Prodigy or any of those systems?","S2: No, I haven't done that.","I know someone who has, and, and she's very pleased with it.","And it's, it's everything@NPHEAD1 it's@RCSUBJ1 supposed@RCVERB1 to be."], id:"9"}, qs, {q: "Is it living up to expectations?" , hasCorrect: "Yes", randomOrder: false}, qs, {q: "Is someone unhappy with the Prodigy system?" , hasCorrect: "No", randomOrder: false}],
    [["StimThat.OriginalZero",[31,7]], ds, {s: ["S1:_And what did, did you ever try using like Prodigy or any of those systems?","S2: No, I haven't done that.","I know someone who has, and, and she's very pleased with it.","And it's, it's everything@NPHEAD1 that@COMPL it's@RCSUBJ1 supposed@RCVERB1 to be."], id:"9"}, qs, {q: "Is it living up to expectations?" , hasCorrect: "Yes", randomOrder: false}, qs, {q: "Is someone unhappy with the Prodigy system?" , hasCorrect: "No", randomOrder: false}],
    [["filler",32], ds, {s: ["S1:_How did you like Africa?", "S2: Well, I liked it.","I was working in Cameroon, Africa."], id:"F.15.noSBAR"}, qs, {q: "Is Cameroon in Africa?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler",33], ds, {s: "S1:_It ju-, well see now, with our jobs mainly hitting downtown Dallas we couldn't go too much further, but, we pra-, we went that way.", id:"F.24.noSBAR"}],
    [["filler",34], ds, {s: ["S1:_Uh-huh.","S2:_He, he'd, we'd gotten a couple of books and then he just started doing it."], id:"F.58.noSBAR"}],
    [["StimThat.OriginalThat",[35,7]], ds, {s: ["S1:_And there's teams in the United States, and they're playing now during the summer months, and it's really, you know, overkill.","S2:_Oh yeah.","S1:_But it's not as many people@NPHEAD1 there that@COMPL I@RCSUBJ1 really, really enjoy@RCVERB1 seeing."], id:"10"}],
    [["StimZero.OriginalThat",[35,7]], ds, {s: ["S1:_And there's teams in the United States, and they're playing now during the summer months, and it's really, you know, overkill.","S2:_Oh yeah.","S1:_But it's not as many people@NPHEAD1 there I@RCSUBJ1 really, really enjoy@RCVERB1 seeing."], id:"10"}],
    [["filler",36], ds, {s: "S1:_And, and they, it would have been devastated, they would have collapsed.", id:"F.14.noSBAR"}],
    [["filler",37], ds, {s: ["S1:_It's against the law to do a lot of things, you know.","They could basically, uh, when I was getting robbed down in Florida, I was really considering electrifying doors um, things like that like."], id:"F.69.SBAR"}, qs, {q: "Are electrified doors options for preventing robberies?" , hasCorrect: "Yes", randomOrder: false}, qs, {q: "Are many things unlawful?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalZero",[38,7]], ds, {s: ["S1:_And we take the, the civil liberties stuff too far.","You know like people that are in prison, I mean we didn't put them there.","They put themselves in that situation.","S2:_Uh-huh, oh yeah.","S1:_I mean I don't, I honestly don't really think I could have, you know, done much better than I did in the school@NPHEAD1 system@NPHEAD2 that@COMPL I@RCSUBJ1 was@RCVERB1 in.@RCVERB2"], id:"11"}],
    [["StimZero.OriginalZero",[38,7]], ds, {s: ["S1:_And we take the, the civil liberties stuff too far.","You know like people that are in prison, I mean we didn't put them there.","They put themselves in that situation.","S2:_Uh-huh, oh yeah.","S1:_I mean I don't, I honestly don't really think I could have, you know, done much better than I did in the school@NPHEAD1 system@NPHEAD2 I@RCSUBJ1 was@RCVERB1 in.@RCVERB2"], id:"11"}],
    [["filler",39], ds, {s: ["S1:_Well good, maybe I can learn something.","S2:_Well, I don't know how much you can learn."], id:"F.70.SBAR"}],
    [["filler",40], ds, {s: ["S1:_Well, how long have you been here?", "S2: Well, we've been here since January, so we, we still feel very new."], id:"F.53.noSBAR"}],
    [["StimZero.OriginalThat",[41,7]], ds, {s: ["S1:_Well I, well I work for the government, and, actually I work for the FBI.","S2:_Oh, my gosh.","S1:_But the the ice storms really are stressful on all the, the plants@NPHEAD1 we@RCSUBJ1 have@RCVERB1 around."], id:"12"}, qs, {q: "Are the ice storms nice to the plants that are around?" , hasCorrect: "No", randomOrder: false}],
    [["StimThat.OriginalThat",[41,7]], ds, {s: ["S1:_Well I, well I work for the government, and, actually I work for the FBI.","S2:_Oh, my gosh.","S1:_But the the ice storms really are stressful on all the, the plants@NPHEAD1 that@COMPL we@RCSUBJ1 have@RCVERB1 around."], id:"12"}, qs, {q: "Are the ice storms nice to the plants that are around?" , hasCorrect: "No", randomOrder: false}],
    [["filler",42], ds, {s: ["S1:_I'm in the oil business.","S2:_Oh, in the oil business."], id:"F.29.noSBAR"}],
    [["filler",43], ds, {s: ["S1:_That's my case also.","I've got a new born and there's just no time."], id:"F.6.noSBAR"}, qs, {q: "Is there a lot of time?" , hasCorrect: "No", randomOrder: false}],
    [["StimThat.OriginalThat",[44,7]], ds, {s: ["S1:_If you compare the, like the people that could have, that could have sent their kids to private schools and the people that, you know, the people that did send their kids to private schools, I think they compare, you know, fairly well.","S2:_Yeah.","Yeah.","S1:_I had, I've had two or three drug tests@NPHEAD1 that@COMPL I@RCSUBJ1 had@RCVERB1 to@RCVERB2 get@RCVERB3 before I could start working at a job, different jobs."], id:"14"}, qs, {q: "Do some jobs require drug tests beforehand?" , hasCorrect: "Yes", randomOrder: false}, qs, {q: "Are there more people who could have sent their kids to private school than actually did?" , hasCorrect: "No", randomOrder: false}],
    [["StimZero.OriginalThat",[44,7]], ds, {s: ["S1:_If you compare the, like the people that could have, that could have sent their kids to private schools and the people that, you know, the people that did send their kids to private schools, I think they compare, you know, fairly well.","S2:_Yeah.","Yeah.","S1:_I had, I've had two or three drug tests@NPHEAD1 I@RCSUBJ1 had@RCVERB1 to@RCVERB2 get@RCVERB3 before I could start working at a job, different jobs."], id:"14"}, qs, {q: "Do some jobs require drug tests beforehand?" , hasCorrect: "Yes", randomOrder: false}, qs, {q: "Are there more people who could have sent their kids to private school than actually did?" , hasCorrect: "No", randomOrder: false}],
    [["filler",45], ds, {s: ["S1:_But, uh, somehow or other that does manage to, uh, show these little cracks.","I don't know quite how that works.","Maybe it isn't drywall."], id:"F.4.noSBAR"}],
    [["StimZero.OriginalZero",[46,7]], ds, {s: ["S1:_Well, I think, the, the health care, of course, is an important, and has to be the single most important benefit.","S2:_Uh-huh.","S1:_In the case@NPHEAD1 you@RCSUBJ1 were@RCVERB1 involved@RCVERB2 in@RCVERB3, you said it was just sort of a bank matter of some kind."], id:"13"}],
    [["StimThat.OriginalZero",[46,7]], ds, {s: ["S1:_Well, I think, the, the health care, of course, is an important, and has to be the single most important benefit.","S2:_Uh-huh.","S1:_In the case@NPHEAD1 that@COMPL you@RCSUBJ1 were@RCVERB1 involved@RCVERB2 in@RCVERB3, you said it was just sort of a bank matter of some kind."], id:"13"}],
    [["filler",47], ds, {s: ["S1:_And you don't have to h-, be sick, out of town or anything.","They, there is no excuse.","Anyone can go and vote."], id:"F.7.noSBAR"}, qs, {q: "Can everybody vote?" , hasCorrect: "Yes", randomOrder: false}, qs, {q: "Is there any excuse?" , hasCorrect: "No", randomOrder: false}],
    [["filler",48], ds, {s: ["S1:_To come in and live with them.","S2:_I could easily envision that."], id:"F.5.noSBAR"}],
    [["StimThat.OriginalZero",[49,7]], ds, {s: ["S1:_I think they checked for drugs.","They just don't tell you they did.","S2:_Yeah.","But it was, I mean, it was, it was cute, but not the biggest laugh@NPHEAD1 that@COMPL I've@RCSUBJ1 seen.@RCVERB1"], id:"15"}],
    [["StimZero.OriginalZero",[49,7]], ds, {s: ["S1:_I think they checked for drugs.","They just don't tell you they did.","S2:_Yeah.","But it was, I mean, it was, it was cute, but not the biggest laugh@NPHEAD1 I've@RCSUBJ1 seen.@RCVERB1"], id:"15"}],
    [["filler",50], ds, {s: ["S1:_Uh-huh.","S2:_Like the guy in California got thir-, you know, twice before he went to the gas chamber and then they said okay, no."], id:"F.56.noSBAR"}],
    [["StimZero.OriginalThat",[51,7]], ds, {s: ["S1:_Yeah, yeah, I can, I can believe that.","Yeah, I, I don't claim to have an in-depth understanding by any means, but...","S2:_Now I, shoot,...","The U.S. isn't the threat@NPHEAD1 we've@RCSUBJ1 always made@RCVERB1 them out to be, you know, even if they're saying that beneath the doors."], id:"16"}, qs, {q: "Is the US the threat that they have been made out to be?" , hasCorrect: "No", randomOrder: false}],
    [["StimThat.OriginalThat",[51,7]], ds, {s: ["S1:_Yeah, yeah, I can, I can believe that.","Yeah, I, I don't claim to have an in-depth understanding by any means, but...","S2:_Now I, shoot,...","The U.S. isn't the threat@NPHEAD1 that@COMPL we've@RCSUBJ1 always made@RCVERB1 them out to be, you know, even if they're saying that beneath the doors."], id:"16"}, qs, {q: "Is the US the threat that they have been made out to be?" , hasCorrect: "No", randomOrder: false}],
    [["filler",52], ds, {s: "S1:_It's just, it's like I said, we've had him for two years and he's never, I mean, he's, he's gotten out.", id:"F.25.noSBAR"}],
    [["filler",53], ds, {s: ["S1:_Yeah, that's, that's a good idea.","Maybe this pre-group of people could decide, you know, which kind of, uh, you know, where they could go from there."], id:"F.40.SBAR"}, qs, {q: "Should the pre-group of people fly somewhere?" , hasCorrect: "No", randomOrder: false}],
    [["StimZero.OriginalZero",[54,7]], ds, {s: ["S1:_And they still keep asking you, you know, and keep badgering you about it, and that aggravates me.","But I don't know that you could call that invading of, invading my privacy.","Because, you know, if we don't want that to happen...","I think a lot of it is the families, the way@NPHEAD1 you@RCSUBJ1 were@RCVERB1 mentioning.@RCVERB2"], id:"17"}],
    [["StimThat.OriginalZero",[54,7]], ds, {s: ["S1:_And they still keep asking you, you know, and keep badgering you about it, and that aggravates me.","But I don't know that you could call that invading of, invading my privacy.","Because, you know, if we don't want that to happen...","I think a lot of it is the families, the way@NPHEAD1 that@COMPL you@RCSUBJ1 were@RCVERB1 mentioning.@RCVERB2"], id:"17"}],
    [["filler",55], ds, {s: ["S1:_Oh.","S2:_But, uh, it's supposed to leave early in the week and then be back in the sixties.","We have very windy winters and very cold."], id:"F.50.noSBAR"}, qs, {q: "Are the winters warm?" , hasCorrect: "No", randomOrder: false}],
    [["filler",56], ds, {s: ["S1:_I didn't piece it or anything like that but, uh...","S2:_But you actually hand quilted it yourself."], id:"F.28.noSBAR"}, qs, {q: "Is it possible to quilt by hand?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalZero",[57,7]], ds, {s: ["S1:_Well, the summers have gotten where they're a lot hotter.","S2:_Uh-huh.","S1:_Actually, yesterday I ended up talking to somebody else from the same lab@NPHEAD1 that@COMPL I'm@RCSUBJ1 in.@RCVERB1"], id:"19"}],
    [["StimZero.OriginalZero",[57,7]], ds, {s: ["S1:_Well, the summers have gotten where they're a lot hotter.","S2:_Uh-huh.","S1:_Actually, yesterday I ended up talking to somebody else from the same lab@NPHEAD1 I'm@RCSUBJ1 in.@RCVERB1"], id:"19"}],
    [["filler",58], ds, {s: ["S1:_I mean, my god, they fought and won the whole thing.","S2:_Yeah, well, my wife's from Galveston."], id:"F.20.noSBAR"}],
    [["filler",59], ds, {s: ["S1:_That's about as much as we can do with current events.","S2:_Right.","Well, it was nice talking to you."], id:"F.43.noSBAR"}],
    [["StimThat.OriginalThat",[60,7]], ds, {s: ["S1:_You get those great big cracks in the ground where it's been so dry, and it just gets so dry, and the earth opens up.","There's lots of things@NPHEAD1 that@COMPL we@RCSUBJ1 don't@RCVERB1 get@RCVERB2 told@RCVERB3 for good reason."], id:"18"}],
    [["StimZero.OriginalThat",[60,7]], ds, {s: ["S1:_You get those great big cracks in the ground where it's been so dry, and it just gets so dry, and the earth opens up.","There's lots of things@NPHEAD1 we@RCSUBJ1 don't@RCVERB1 get@RCVERB2 told@RCVERB3 for good reason."], id:"18"}],
    [["filler",61], ds, {s: ["S1:_So that's in our budget every month now.","That's the newest addition.","But we too do the same thing as far as, uh, we have a set amount."], id:"F.16.noSBAR"}, qs, {q: "Is there a variable amount?" , hasCorrect: "No", randomOrder: false}, qs, {q: "Is there a new addition to the budget?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler",62], ds, {s: ["S1:_I used to do a lot more repairs when cars were easy to work on, than I do now.","S2:_Okay.","S1:_I do, uh, I do the easy stuff now."], id:"F.10.noSBAR"}],
    [["StimZero.OriginalZero",[63,7]], ds, {s: ["S1:_Yeah, I know, that's kind of how I am.","When it's summertime, I'm wearing shorts...","She's up in the house and talked to my mother the whole time@NPHEAD1 we@RCSUBJ1 were@RCVERB1 out@RCVERB2 hunting and stuff."], id:"21"}],
    [["StimThat.OriginalZero",[63,7]], ds, {s: ["S1:_Yeah, I know, that's kind of how I am.","When it's summertime, I'm wearing shorts...","She's up in the house and talked to my mother the whole time@NPHEAD1 that@COMPL we@RCSUBJ1 were@RCVERB1 out@RCVERB2 hunting and stuff."], id:"21"}],
    [["filler",64], ds, {s: ["S1:_Well, th-, the question was talking about the juries and, uh, one of the things I thought about was a lot of the drunk cases that they were having, that, especially for repeat offenders that, uh, maybe there should be stiffer penalties for those people who come back again and again.","Uh, so that, uh, a judge, I think, would be the most appropriate person to, uh, to be able to sentence somebody since they do it over and over again every day."], id:"F.67.SBAR"}, qs, {q: "Is a judge a bad person to sentence someone?" , hasCorrect: "No", randomOrder: false}, qs, {q: "Is there an opinion that there should be stiffer punishments for repeat offenders?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler",65], ds, {s: ["S1:_So I can sit there and read and listen to music, like what you said, and it has no effect on me.","So I mean, it's boring."], id:"F.9.noSBAR"}],
    [["StimThat.OriginalThat",[66,7]], ds, {s: ["S1:_And you're, you get mixed signals.","So it's, it's not always the school systems.","And as far as, like, them entertaining the rights@NPHEAD1 that@COMPL they@RCSUBJ1 should@RCVERB1 have.@RCVERB2"], id:"22"}],
    [["StimZero.OriginalThat",[66,7]], ds, {s: ["S1:_And you're, you get mixed signals.","So it's, it's not always the school systems.","And as far as, like, them entertaining the rights@NPHEAD1 they@RCSUBJ1 should@RCVERB1 have.@RCVERB2"], id:"22"}],
    [["filler",67], ds, {s: ["S1:_But, um, I've never thought about wearing your worst outfit on Monday, because really no one's paying attention.","But anyway, um, I really, I don't work outside of school.","Um, I work in the computer lab at school."], id:"F.21.noSBAR"}, qs, {q: "Are there computer labs in some schools?" , hasCorrect: "Yes", randomOrder: false}, qs, {q: "Do some people wear their worst outfits on Mondays?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler",68], ds, {s: ["S1:_That's for sure.","But I can't complain.","I don't know if I've been spoiled."], id:"F.68.SBAR"}],
    [["StimZero.OriginalThat",[69,7]], ds, {s: ["S1:_I would put just a little bit of cat litter in there, because if I put a lot, one of the cats would have been...","S2:_Uh-huh.","S1:_I, I think some of these people@NPHEAD1 they@RCSUBJ1 claim@RCVERB1 as middle eastern experts don't, don't have a clue sometimes."], id:"20"}, qs, {q: "Are all the people that are claimed as Middle East experts very knowledgable?" , hasCorrect: "No", randomOrder: false}],
    [["StimThat.OriginalThat",[69,7]], ds, {s: ["S1:_I would put just a little bit of cat litter in there, because if I put a lot, one of the cats would have been...","S2:_Uh-huh.","S1:_I, I think some of these people@NPHEAD1 that@COMPL they@RCSUBJ1 claim@RCVERB1 as middle eastern experts don't, don't have a clue sometimes."], id:"20"}, qs, {q: "Are all the people that are claimed as Middle East experts very knowledgable?" , hasCorrect: "No", randomOrder: false}],
    [["filler",70], ds, {s: ["S1:_Uh-huh.","Basically you're baking, baking chicken in a, in an open pan, um, having marinated it first and, my wife did this part."], id:"F.8.SBAR"}, qs, {q: "Did the husband do everything?" , hasCorrect: "No", randomOrder: false}, qs, {q: "Do you bake the chicken?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler",71], ds, {s: ["S1:_So, we're hoping to do like a three day weekend.","There's, um, a thing called Pfeiffer Rim."], id:"F.12.noSBAR"}, qs, {q: "Is there something called Pfeiffer Rim?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalZero",[72,7]], ds, {s: ["S1:_Oh, I think we rented 'Pretty Woman' a couple weeks, months ago.","It requires a lot of effort to, to do that sort of thing.","I mean, I used to enjoy going, I mean I still do kind of enjoy it...","Because, you know, if we don't want that to happen, all@NPHEAD1 that@COMPL we@RCSUBJ1 have@RCVERB1 to@RCVERB2 do@RCVERB3 is just call the phone company and say look, you know, I want my name unlisted, or want my, you know."], id:"23"}, qs, {q: "Is is true that to get more privacy all that you have to do is call up the phone company and become unlisted?" , hasCorrect: "Yes", randomOrder: false}, qs, {q: "Does it take effort to rent a movie?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimZero.OriginalZero",[72,7]], ds, {s: ["S1:_Oh, I think we rented 'Pretty Woman' a couple weeks, months ago.","It requires a lot of effort to, to do that sort of thing.","I mean, I used to enjoy going, I mean I still do kind of enjoy it...","Because, you know, if we don't want that to happen, all@NPHEAD1 we@RCSUBJ1 have@RCVERB1 to@RCVERB2 do@RCVERB3 is just call the phone company and say look, you know, I want my name unlisted, or want my, you know."], id:"23"}, qs, {q: "Is is true that to get more privacy all that you have to do is call up the phone company and become unlisted?" , hasCorrect: "Yes", randomOrder: false}, qs, {q: "Does it take effort to rent a movie?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler",73], ds, {s: ["S1:_Yeah.","S2:_But, they certainly didn't expect everybody to and it was really only, uh, acceptable if you were engaged and planning to get married in, in the relatively near future."], id:"F.64.SBAR"}],
    [["filler",74], ds, {s: ["S1:_How did they end up this year?","Did they, did they make it to the play-offs at all?","S2:_Well, they started out really bad."], id:"F.13.noSBAR"}, qs, {q: "Did they start out really bad?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler",75], ds, {s: ["S1:_Yeah.","Well, credit cards.","S2:_Well, they're dangerous."], id:"F.17.noSBAR"}],
    [["StimZero.OriginalThat",[76,7]], ds, {s: ["S1:_I love them.","I have some dulcimer music.","I mean, like I said, that, that's pretty varied.","S2:_Yeah, it sure is.","S1:_They convicted him of a robbery@NPHEAD1 he@RCSUBJ1 could@RCVERB1 not@RCVERB2 physically@RCVERB3 have@RCVERB4 been@RCVERB5 able@RCVERB6 to@RCVERB7 commit.@RCVERB8"], id:"24"}],
    [["StimThat.OriginalThat",[76,7]], ds, {s: ["S1:_I love them.","I have some dulcimer music.","I mean, like I said, that, that's pretty varied.","S2:_Yeah, it sure is.","S1:_They convicted him of a robbery@NPHEAD1 that@COMPL he@RCSUBJ1 could@RCVERB1 not@RCVERB2 physically@RCVERB3 have@RCVERB4 been@RCVERB5 able@RCVERB6 to@RCVERB7 commit.@RCVERB8"], id:"24"}],
    [["filler",77], ds, {s: ["S1:_And right now I'm just a little over about a mile and a half.","S2:_Okay.","S1:_But I'm trying to workup to three miles."], id:"F.11.noSBAR"}],
    [["filler",78], ds, {s: ["S1:_That's right.","You know, I remember when I was working in high school, you know, I was working in an office, right after I got out of high school."], id:"F.65.SBAR"}, qs, {q: "Can people find work with only a high school degree?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalThat",[79,7]], ds, {s: ["S1:_Yeah, they seem to be a part of life.","S2:_Well, I do use them.","All of her animals@NPHEAD1 that@COMPL she@RCSUBJ1 ever had@RCVERB1 were adopted."], id:"26"}, qs, {q: "Did she adopt all the animals she owned?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimZero.OriginalThat",[79,7]], ds, {s: ["S1:_Yeah, they seem to be a part of life.","S2:_Well, I do use them.","All of her animals@NPHEAD1 she@RCSUBJ1 ever had@RCVERB1 were adopted."], id:"26"}, qs, {q: "Did she adopt all the animals she owned?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler",80], ds, {s: ["S1:_Oh, that's okay.","S2:_Um, we're late twenties."], id:"F.42.noSBAR"}],
    [["filler",81], ds, {s: ["S1:_Um, gosh.","I ca-, my husband and I both went.","We kind of give her the third degree."], id:"F.45.noSBAR"}],
    [["StimZero.OriginalZero",[82,7]], ds, {s: ["S1:_I, I don't think that they, they educate them enough to, to really know what's going on.","S2:_She told me some of the things@NPHEAD1 you@RCSUBJ1 can@RCVERB1 do.@RCVERB2"], id:"25"}],
    [["StimThat.OriginalZero",[82,7]], ds, {s: ["S1:_I, I don't think that they, they educate them enough to, to really know what's going on.","S2:_She told me some of the things@NPHEAD1 that@COMPL you@RCSUBJ1 can@RCVERB1 do.@RCVERB2"], id:"25"}],
    [["filler",83], ds, {s: ["S1:_Uh-huh.","Well, the thing about newspapers and paper, recycled paper is actually very expensive."], id:"F.22.noSBAR"}, qs, {q: "Is recycled paper cheap?" , hasCorrect: "No", randomOrder: false}],
    [["filler",84], ds, {s: ["S1:_They sure are.","Wouldn't it be something to have a World Series between Da-, the Rangers and the Astros.","S2:_Oh, wouldn't it, wouldn't it though."], id:"F.44.noSBAR"}],
    [["StimThat.OriginalZero",[85,7]], ds, {s: ["S1:_I go home, I've gone home every year now since I've moved to Dallas to, to go pheasant hunting, and the, the last time I took my wife along, and kind of the same situation.","Al Jarreau, he's somebody@NPHEAD1 that@COMPL I@RCSUBJ1 like.@RCVERB1"], id:"27"}, qs, {q: "Is Al Jarreau a man that is disliked by this person?" , hasCorrect: "No", randomOrder: false}, qs, {q: "Can people go pheasant hunting in Dallas?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimZero.OriginalZero",[85,7]], ds, {s: ["S1:_I go home, I've gone home every year now since I've moved to Dallas to, to go pheasant hunting, and the, the last time I took my wife along, and kind of the same situation.","Al Jarreau, he's somebody@NPHEAD1 I@RCSUBJ1 like.@RCVERB1"], id:"27"}, qs, {q: "Is Al Jarreau a man that is disliked by this person?" , hasCorrect: "No", randomOrder: false}, qs, {q: "Can people go pheasant hunting in Dallas?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler",86], ds, {s: ["S1:_Um.","S2:_But, it, it should be starting, I would stay probably in the next month if, if everything goes that, I'm not sure all what we're going to have to do, whether we have three separate containers."], id:"F.62.SBAR"}, qs, {q: "Does somebody know what to do for sure?" , hasCorrect: "No", randomOrder: false}, qs, {q: "Is something starting in about a month?" , hasCorrect: "Yes", randomOrder: false}],
    [["filler",87], ds, {s: ["S1:_I like the music, but I've been unable to do that, because I hurt my foot about five years ago."], id:"F.39.SBAR"}, qs, {q: "Can all activities be done with a hurt foot?" , hasCorrect: "No", randomOrder: false}],
    [["StimZero.OriginalThat",[88,7]], ds, {s: ["S1:_I don't really bother with the Washington station because I just, it's so far removed from what I'm interested in.","S2:_And the rates@NPHEAD1 we@RCSUBJ1 keep@RCVERB1 paying@RCVERB2 seem to keep increasing, you know."], id:"28"}, qs, {q: "Do the rates keep going up?" , hasCorrect: "Yes", randomOrder: false}],
    [["StimThat.OriginalThat",[88,7]], ds, {s: ["S1:_I don't really bother with the Washington station because I just, it's so far removed from what I'm interested in.","S2:_And the rates@NPHEAD1 that@COMPL we@RCSUBJ1 keep@RCVERB1 paying@RCVERB2 seem to keep increasing, you know."], id:"28"}, qs, {q: "Do the rates keep going up?" , hasCorrect: "Yes", randomOrder: false}],
    ["contact", "Message", {consentRequired: false, html: {include: "contacts.html"}}],
    ["code", "Message", {consentRequired: false, html: {include: "code.html"}}]
];
