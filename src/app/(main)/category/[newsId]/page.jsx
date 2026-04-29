import Leftsidebar from "@/components/Hompage/News/Leftsidebar";
import NewsCard from "@/components/Hompage/News/NewsCard";
import RightSideBar from "@/components/Hompage/News/RightSideBar";
import { getCatagories, getNewsByCatagories } from "@/lib/data";


const DetailsPage = async ({ params }) => {

  const categoriesData = await getCatagories();
  const categories = categoriesData.news_category;

  // console.log(categories)

  const { newsId } = await params;

  const news = await getNewsByCatagories(newsId)

  // console.log('starteg', news, ' this is  news')

  // console.log(newsId, 'this is id')

  return (

    <div className="grid grid-cols-12 container mx-auto my-11 gap-5">

      <div className=" col-span-3">
        <Leftsidebar activId={newsId} categories={categories}></Leftsidebar>
      </div>


      <div className="bg-yellow-500 col-span-6">
        {news.length > 0 ? (
          news.map(n => <NewsCard key={n._id} news ={n}></NewsCard>)
        ) : (<h2 className="text-4xl text-center my-21 font-bold ">No News Found</h2>)
        }
      </div>

      <div className="col-span-3">
        <RightSideBar></RightSideBar>
      </div>




    </div>


  );
};

export default DetailsPage;