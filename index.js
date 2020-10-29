var faunadb = require('faunadb'),
  q = faunadb.query;
// this is anonemous function
(async () => {
  var adminClient = new faunadb.Client({ secret: 'fnAD5WeOoIACAT34e9I09IKmqUhHmtXWieR2IVUO' }); // create secret key from "SECURITY" under database for the first time u need to create it manually


  try {
    //  ************  create database
    //  const result=await adminClient.query(
    //   q.CreateDatabase({ name: 'test' })
    // )
    // ************ create key

    // const result=await adminClient.query(
    //   q.CreateKey({
    //     database: q.Database('test'),
    //     role: 'admin',
    //   })
    // )


    // ************ create key

    // const result =await adminClient.query(
    //   q.CreateCollection({ name: 'messages' })
    // )


    // ************ create index

    // const result=await adminClient.query(
    //   q.CreateIndex({
    //     name: 'detaiil_by_title',
    //     source: q.Collection('messages'), // collection name will be name as createCollection
    //     terms: [{ field: ['data', 'detail'] }],
    //   })
    // )

    // ************ insert data

    // const result=await  adminClient.query(
    //     q.Create(
    //       q.Collection('messages'),
    //       { data: { detail: 'hello world' } },
    //     )
    //   )

    // ************ insert multiple data
    // const result = await adminClient.query(
    //   q.Map(
    //     [
    //       'detail........',
    //       'detail........',
    //       'detail........',
    //     ],
    //     q.Lambda(
    //       'detail',
    //       q.Create(
    //         q.Collection('messages'),
    //         { data: { title: q.Var('detail') } },
    //       )
    //     ),
    //   )
    // )


   // ************ retrive data by refID

  //  const result=await adminClient.query(
  //     q.Get(q.Ref(q.Collection('messages'), '280746119891255809'))
  //   )


       // ************ retrive data by value

   const result=await adminClient.query(
    q.Get(
      q.Match(q.Index('detaiil_by_title'), 'hello world')
    )
  )

    console.log(result)
  } catch (err) {
    console.log(err)
  }



})();