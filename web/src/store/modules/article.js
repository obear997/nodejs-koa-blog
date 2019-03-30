import article from '../../api/article'

const state = {
  // 文章
  articleList: [],
  // 文章详情
  articleDetail: null,
};

const mutations = {
  // 设置文章列表
  SET_ARTICLE_LIST(state, data) {
    state.articleList = data
  },
  // 设置文章详情
  SET_ARTICLE_DETAIL(state, data) {
    state.articleDetail = data
  },
};

const actions = {

  /**
   * 获取文章列表
   * @param state
   * @param commit
   * @param params
   * @returns {Promise<void>}
   */
  async getArticleList({state, commit}, params) {
    let ret = await article.list(params);

    commit('SET_ARTICLE_LIST', ret.data.data.data);

    return ret.data.data;
  },

  /**
   * 获取文章详情信息
   * @param state
   * @param commit
   * @returns {Promise<void>}
   */
  async getArticleDetail({state, commit}, id) {
    let ret = await article.detail(id);
    commit('SET_ARTICLE_DETAIL', ret);

    return ret;
  },
  /**
   * 搜索文章详情信息
   * @param state
   * @param commit
   * @returns {Promise<void>}
   */
  async searchArticle({state, commit}, params) {
    let ret = await article.search(params);
    commit('SET_ARTICLE_LIST', ret);

    return ret;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
